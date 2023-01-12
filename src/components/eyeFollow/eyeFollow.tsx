import { $, component$, QwikMouseEvent, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./eyeFollow.css?inline";

export const EyeFollow = component$(() => {
    useStylesScoped$(style);

    const eyeRotationRad = useSignal<number>(0);

    const rotateEyes$ = $((ev: QwikMouseEvent) => {
        const anchor = document.querySelector(".eyes-container");
        if (!anchor) return;

        const mouseX = ev.clientX;
        const mouseY = ev.clientY;

        const rect = anchor.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const deg = Math.atan2(dy, dx) * 180 / Math.PI;

        eyeRotationRad.value = (deg - 90);
    });


    return (
        <div class="eyes-container">
            <img src="/eyeball.png" class="eye" style={{ "transform": `rotate(${eyeRotationRad.value}deg)` }} window:onMouseMove$={(ev) => rotateEyes$(ev)}></img>
            <img src="/eyeball.png" class="eye" style={{ "transform": `rotate(${eyeRotationRad.value}deg)` }} window:onMouseMove$={(ev) => rotateEyes$(ev)}></img>
        </div>
    );
});