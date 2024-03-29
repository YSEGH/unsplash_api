"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export enum REQUEST_STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

const per_page = 30;
const restUrlDownload = "/api/photos/download";
const restUrlGet = "/api/photos/get";
const restUrlSearch = "/api/photos/search";

const usePhotos = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<any[]>([]);
  const [moreContent, setMoreContent] = useState(true);
  const [requestStatus, setRequestStatus] = useState<REQUEST_STATUS>(
    REQUEST_STATUS.LOADING
  );
  const [error, setError] = useState<string | null>(null);

  const incrementPage = (page?: number) => {
    setPage((prevState) => {
      if (page) {
        return page;
      }
      return prevState + 1;
    });
  };

  const downloadAllPhotos = async (photos: any, cb?: (() => void) | null) => {
    try {
      const response = await axios.post(restUrlDownload, photos, {
        responseType: "arraybuffer",
      });
      if (response && response.data) {
        const blob = new Blob([response.data], { type: "application/zip" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "photos.zip";
        a.click();
        window.URL.revokeObjectURL(url);
        if (cb) {
          cb();
        }
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  const getPhotos = async (params: any = {}, reset: boolean = false) => {
    setRequestStatus(REQUEST_STATUS.LOADING);
    try {
      const result = await axios.get<any[]>(restUrlGet, {
        params: params,
      });

      if (result) {
        setPhotos((prevState) => {
          if (reset) {
            return result.data;
          }
          return [...prevState, ...result.data];
        });
        if (result.data.length < per_page) {
          setMoreContent(false);
        } else {
          if (!moreContent) {
            setMoreContent(true);
          }
        }
        incrementPage(reset ? 1 : params.page);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      }
    } catch (e: any) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(e.message);
    }
  };

  const getPhotosBySearch = async (
    params: any = {},
    reset: boolean = false
  ) => {
    setRequestStatus(REQUEST_STATUS.LOADING);
    try {
      const result = await axios.get(restUrlSearch, {
        params: params,
      });

      if (result) {
        setPhotos((prevState) => {
          if (reset) {
            return result.data.results;
          }
          return [...prevState, ...result.data.results];
        });
        if (result.data.results.length < per_page) {
          setMoreContent(false);
        } else {
          if (!moreContent) {
            setMoreContent(true);
          }
        }
        incrementPage(reset ? 1 : params.page);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      }
    } catch (e: any) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(e.message);
    }
  };

  useEffect(() => {
    getPhotos({ page: page });
  }, []);

  return {
    page,
    photos,
    moreContent,
    incrementPage,
    getPhotos,
    getPhotosBySearch,
    downloadAllPhotos,
    requestStatus,
    error,
  };
};

export default usePhotos;
