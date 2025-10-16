import Errors from "../libs/Errors";
import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import memberSchem from "../schema/Member.model";
import { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { MemberType } from "../libs/enum/member.enum";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({
                memberType: MemberType.RESTAURANT,
            })
            .exec();
        console.log("Exist:", exist);
        if (exist)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        try {
            const result = await this.memberModel.create(input);
            // const tempResult = new this.memberModel(input);
            // const result = await tempResult.save();
            result.memberPassword = "";
            // console.log("Passsed here");
            return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}
export default MemberService;
