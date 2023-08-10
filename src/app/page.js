"use client";

import { comments } from "@/libs/comments"; // นำเข้าข้อมูลคอมเมนต์
import { Comment } from "@/components/Comment"; // นำเข้าคอมโพเนนต์ Comment
import { PostOwner } from "@/components/PostOwner";
import { React } from "react"; // นำเข้า React

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner> </PostOwner>
        {/* Comment Example */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Lisa
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>999 คน</span>
            </div>
          </div>
        </div>

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              หมาน้อย
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              {/* <img src="/like.svg" width={20}></img> */}
              {/* <span style={{ color: "#B0B3B8" }}>2 คน</span> */}
            </div>
          </div>
        </div>
        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/popcat.png"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Cat Meme
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>ลิซ่าาาาาาา</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>2 คน</span>
            </div>
          </div>
        </div>

        {/* Comment Example */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/charliebrown.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Charlie Brown
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>บ้าไปแล้ว</span>
            <div className="d-flex align-items-center gap-1">
              {/* <img src="/like.svg" width={20}></img> */}
              {/* <span style={{ color: "#B0B3B8" }}>999 คน</span> */}
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
        {/* ใส่แล้ว ทำแล้ว ทำอยู่ แต่รันบ่ด้ายยยยยยยยยยยยยยยยยยยยยยยยยยยย */}
        {/* {comments.map((comment, index) => (
          <Comment
            key={index}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))} */}
      </div>
    </div>
  );
}
