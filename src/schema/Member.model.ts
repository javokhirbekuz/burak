import { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enum/member.enum";
import mongoose from "mongoose";

const memberSchema = new Schema(
    {
        memberType: {
            type: String,
            enum: MemberType,
            default: MemberType.USER,
        },
        memberStatus: {
            type: String,
            enum: MemberStatus,
            default: MemberStatus.ACTIVE,
        },
        memberNick: {
            type: String,
            index: { unique: true, sparse: true },
            required: true,
        },
        memberPhone: {
            type: String,
            index: { unique: true, sparse: true },
            requiredPaths: true,
        },
        memberPassword: {
            type: String,
            select: false,
            required: true,
        },
        memberImage: {
            type: String,
        },
        memberPoints: {
            type: Number,
            default: 0,
        },
        memberAddress: {
            type: String,
        },
        memberDesc: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
