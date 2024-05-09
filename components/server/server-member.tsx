"use client";

import {
  MemberRole,
  type Member,
  type Profile,
  type Server,
} from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

export const ServerMember = ({ member, server }: ServerMemberProps) => {
  return <div>server-member</div>;
};
