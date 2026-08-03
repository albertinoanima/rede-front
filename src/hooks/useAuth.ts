"use client";

import { AuthContext } from "@/components/contexts/AuthContext";
import {
    useContext,
} from "react";

export const useAuth = () => {
    return useContext(AuthContext);
};