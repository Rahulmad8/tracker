import React, { component } from "react";
import moment from "moment";

function SenderComponent(props) {
    let { singleQuery, handleDelete, innerIndex, outerIndex } = props;
    let { sendDateTime, sender, senderMessage, senderRole, deleteRemark, remarkFor, remarkType } = singleQuery
    return (
        <div className="outgoing_msg">
            {
                remarkFor == "Review" ? <div class="received_msg_name">{remarkFor}: {remarkType}: {sender} ({senderRole})  </div> : <div class="received_msg_name">{remarkFor}: {sender} ({senderRole}) </div>
            }
            <div className="messageContent">
                {deleteRemark && <span className="deleteIcon" onClick={(e) => handleDelete(e, innerIndex, outerIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                </span>}
                <div className="sent_msg">
                    <p>{senderMessage}</p>
                    <span class="time_date"> {moment(new Date(sendDateTime)).format("HH:mm")}   |    {moment(new Date(sendDateTime)).format("YYYY-MM-DD")}</span>
                </div>
            </div>
        </div>
    )
}

export default SenderComponent

{/* <div class="mesgs">
    <div class="msg_history">
        <div class="incoming_msg">
            <div class="incoming_msg_name"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>Test which is a new approach to have all
                    solutions</p>
                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                </div>
            </div>
            <div class="outgoing_msg">
                <div class="sent_msg">
                    <p>Test which is a new approach to have all
                  solutions</p>
                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
        </div>
    </div>
</div> */}