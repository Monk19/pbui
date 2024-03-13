"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./space.scss";
import { authContex } from "@/authcontext/withAuthContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
const myUsers = [
  { name: "ravi", id: 1 },
  { name: "raj", id: 2 },
  { name: "sathvik", id: 3 },

  { name: "mridul", id: 5 },
  { name: "some guy", id: 11 },
  { name: "ravi", id: 19 },
];
// const adminId = 3;
export default function MySpace() {
  const [myFolders, setMyFolders] = useState([]);
  const [sharedFolders, setSharedFolders] = useState([]);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [shareFolderDetails, setShareFolderDetails] = useState({
    folderId: "",
    folderName: "",
    sharedTo: "",
  });
  const [roleToggle, setRoleToggle] = useState();
  const auth = useContext(authContex);
  const session = useSession();
  const router = useRouter();

  console.log("session in myspace-->", session?.data);

  // const [myRole, setMyrole] = useState(auth.myRoleId);

  console.log("auth context check--->", auth);
  // const [shareFolder,setSharedFolder] = useState({})
  const fetchMyFolders = (roleid) => {
    axios
      .post("http://localhost:3402/folder/myfolders", { id: roleid })
      .then((res) => {
        const result = res.data.myFolders;
        console.log("assad", result, myFolders, sharedFolders);
        setMyFolders([...res.data.data.myFolders]);
        setSharedFolders([...res.data.data.shareFolder]);
      });
  };
  const shareMyFolder = () => {
    console.log("Share folder request---->", shareFolderDetails);
    const { sharedTo, folderId } = shareFolderDetails;
    if (!sharedTo || !folderId) {
      throw "Sharing details not matching";
    } else {
      console.log("initiate share folder request");
      axios
        .post("http://localhost:3402/folder/share", {
          sharedTo,
          folderId,
          sharedby: auth.myRoleId,
        })
        .then((res) => {
          const result = res.data;
          setToggleRequest(!toggleRequest);
          console.log(result);
          // setMyFolders([...myFolders, ...res.data.data]);
        });
    }
  };
  useEffect(() => {
    setMyFolders([]);
    setSharedFolders([]);
    fetchMyFolders(auth.myRoleId);
    // console.log("c")
  }, [auth.myRoleId]);
  // folder_createby: 3;
  // folder_createdDate: "Thu Feb 08 2024 11:21:58 GMT+0530 (India Standard Time)";
  // folder_id: 8;
  // folder_is_deletable: false;
  // folder_is_shared: false;
  // folder_name: "munna bhai release event";
  // folder_shared_to: 0;
  // folder_size: 8;

  // if (session.status == "unauthenticated") {
  //   console.log("--0-0-0-0->", session.status);
  //   router.push("/login");
  // }
  return (
    <div className="">
      <TopBar
        user={session.data?.user ? session.data.user : { name: "", email: "" }}
      />
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col-md-4 col-lg-6">
            <div class="page-header-title">My Space</div>
          </div>
          <div class="col-md-8 col-lg-6 text-right header-btns">
            <a href="#">
              Create Floder <span class="icon-cloud-upload"></span>
            </a>
            <a href="#">
              Upload <span class="icon-cloud-upload"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-6 col-md-6 col-lg-3">
          <div class="folder-item">
            <span class="icon-folder-alt"></span>
            <div class="folder-name">Marriage Event</div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-3">
          <div class="folder-item">
            <span class="icon-folder-alt"></span>
            <div class="folder-name">RRR Audio Release</div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-3">
          <div class="folder-item">
            <span class="icon-folder-alt"></span>
            <div class="folder-name">Birthday Function</div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-3">
          <div class="folder-item">
            <span class="icon-folder-alt"></span>
            <div class="folder-name">Paris Tour</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// <div>
//       <div>
//         <h1>My Space</h1>
//         {myFolders.map((ele, index) => {
//           const { folder_name, folder_size } = ele;
//           return (
//             <div className="folder-body" onClick={() => {}}>
//               <div>
//                 {folder_name}:{folder_size}
//               </div>
//               <select
//                 name="cars"
//                 id="cars"
//                 onChange={(e) => {
//                   console.log("Select user to share", e.target.value);
//                   setShareFolderDetails((prev) => ({
//                     ...prev,
//                     sharedTo: +e.target.value,
//                     folderName: ele.folder_name,
//                     folderId: +ele.folder_id,
//                   }));
//                   console.log(
//                     "Sharing the folder user---->",
//                     shareFolderDetails
//                   );
//                 }}
//               >
//                 <option value="">Select user</option>
//                 {myUsers.map((ele, index) => {
//                   return <option value={ele.id}>{ele.name}</option>;
//                 })}
//                 {/*
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option> */}
//               </select>
//               <div onClick={shareMyFolder}>share</div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="shared-to-me">
//         <h1>Shared to me</h1>
//         {sharedFolders.map((ele, index) => {
//           const { folder_name, folder_size } = ele;
//           return (
//             <div className="folder-body" onClick={() => {}}>
//               <div>
//                 {folder_name}:{folder_size}
//               </div>
//               <select
//                 name="cars"
//                 id="cars"
//                 onChange={(e) => {
//                   console.log("Select user to share", e.target.value);
//                   setShareFolderDetails((prev) => ({
//                     ...prev,
//                     sharedTo: +e.target.value,
//                     folderName: ele.folder_name,
//                     folderId: +ele.folder_id,
//                   }));
//                   console.log(
//                     "Sharing the folder user---->",
//                     shareFolderDetails
//                   );
//                 }}
//               >
//                 <option value="">Select user</option>
//                 {myUsers.map((ele, index) => {
//                   return <option value={ele.id}>{ele.name}</option>;
//                 })}
//                 {/*
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option> */}
//               </select>
//               <div onClick={shareMyFolder}>share</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     <div>
//       <select
//         name="cars"
//         id="cars"
//         onChange={(e) => {
//           console.log("Toggle user", e.target.value);
//           auth.handlemyUserId(e.target.value);
//         }}
//       >
//         <option value="">Select user</option>
//         {myUsers.map((ele, index) => {
//           return <option value={ele.id}>{ele.name}</option>;
//         })}
//         {/*
//               <option value="saab">Saab</option>
//               <option value="mercedes">Mercedes</option>
//               <option value="audi">Audi</option> */}
//       </select>
//     </div>
