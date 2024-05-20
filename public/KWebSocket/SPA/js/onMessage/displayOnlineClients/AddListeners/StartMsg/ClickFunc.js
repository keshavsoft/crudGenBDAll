import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = (event) => {
  let commentElement = event.target.closest(".comment");
  if (!commentElement) {
    console.error("Comment element not found");
    return;
  }

  // Get the profile ID from the comment element
  let profileId = commentElement
    .querySelector(".comment-body")
    .querySelector("#comment-messageId").textContent;

  // console.log("Profile ID:", profileId);

  // // Send your WebSocket message with the profile ID
  // webSocket.send(
  //   JSON.stringify({
  //     Type: "sendMessage",
  //     toId: profileId,
  //     Message: "Hello",
  //   })
  // );


  let temp = document.getElementById("templateChatBox");
  let clon = temp.content.cloneNode(true);
  let replace = document.getElementById("SectionId");
  document.getElementById("pageId").replaceChild(clon, replace);
  document.getElementById("headId").style.display = "none";
  replace.style.display = "none";
  document.getElementById("breadCrumpId").style.display = "none";
  document.getElementById("receiverId").innerHTML = profileId;

  StartFuncAddListeners();
};

export { StartFunc };
