import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appId = "856ef62afbe74890b47456cf5230953f";
const token = null;

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// var channelName =  "";
