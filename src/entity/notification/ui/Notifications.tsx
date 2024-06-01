"use client";
import { FC, useEffect } from "react";
import { useGetNotificationsQuery } from "@/entity/notification/api";
import { useAppDispatch, useAppSelector } from "@/app/providers";
import { addNewNotification } from "@/entity/notification/model";
import styles from "./Notification.module.css";

const Notifications: FC = () => {
  const { data } = useGetNotificationsQuery();
  const sliceData = useAppSelector((state) => state.Notification.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addNewNotification(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      {sliceData &&
        sliceData.length > 0 &&
        [...sliceData].reverse().map((data, idx) => (
          <div className={styles.NotificationWrapper} key={idx}>
            {data.status === "created" && <p style={{ color: "#e3e3e3" }}>Добавлен </p>}
            <p>{data.product?.title}</p>
          </div>
        ))}
    </div>
  );
};

export { Notifications };