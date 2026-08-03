"use client";

import { useEffect } from "react";

export function ConfirmAccountAlert() {
    useEffect(() => {
        alert(
            "Este é o link de confirmação da sua conta. " +
            "No fluxo normal, este link será enviado para o seu email e deverá ser clicado posteriormente para confirmar a sua conta."
        );
    }, []);

    return null;
}