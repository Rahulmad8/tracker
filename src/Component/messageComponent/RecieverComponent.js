import React, { Component } from "react";
import moment from "moment";

function RecieverComponent(props) {
    console.log("RecieverComponent", props);
    let { singleQuery, handleDelete, innerIndex, outerIndex } = props;
    let { sendDateTime, sender, senderMessage, senderRole, remarkFor, remarkType } = singleQuery
    return (
        <>
            <div class="incoming_msg mt-3">
                {
                    remarkFor == "Review" ? <span class="incoming_msg_name">{remarkFor}: {remarkType}: {sender} ({senderRole})  </span> : <span class="incoming_msg_name">{remarkFor}: {sender} ({senderRole}) </span>
                }
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>{senderMessage}</p>
                        <span class="time_date"> {moment(new Date(sendDateTime)).format("HH:mm")}   |    {moment(new Date(sendDateTime)).format("YYYY-MM-DD")}</span>
                    </div>
                    {/* <span className="deleteIcon" onClick={(e) => handleDelete(e, innerIndex, outerIndex)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                    </span> */}
                </div>
            </div>
        </>
    )
}

export default RecieverComponent