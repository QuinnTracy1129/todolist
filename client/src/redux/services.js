import axios from "axios";
import { toast } from "react-toastify";

export const browse = async (entity, key = "") => {
  if (typeof key === "object") {
    key = `?${Object.keys(key)
      .map(i => `${i}=${key[i]}`)
      .join("&")}`;
  } else if (key) {
    key = `?key=${key}`;
  }

  return await axios
    .get(`${entity}${key}`)
    .then(res => res.data)
    .catch(err => {
      toast.error(err.response.data.error);
      throw new Error(err);
    });
};

export const save = async (entity, data) =>
  axios
    .post(`${entity}/save`, data)
    .then(res => {
      toast.success("Item saved successfully");
      return res.data;
    })
    .catch(err => {
      toast.error(err.response.data.error);
      throw new Error(err);
    });

export const update = async (entity, data, id) =>
  axios
    .put(`${entity}/${id}/update`, data)
    .then(res => {
      toast.info("Item updated successfully");
      return res.data;
    })
    .catch(err => {
      toast.error(err.response.data.error);
      throw new Error(err);
    });

export const destroy = async (entity, id) =>
  axios
    .delete(`${entity}/${id}/destroy`)
    .then(res => {
      toast.info("Item deleted successfully");
      return res.data;
    })
    .catch(err => {
      toast.error(err.response.data.error);
      throw new Error(err);
    });
