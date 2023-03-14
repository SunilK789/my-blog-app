import { writable, derived, } from "svelte/store";

export const alertType = writable("success");
export const currentAlertType = derived(alertType, ($alertType) => $alertType);

export const setVisibleAlert = writable(false);
export const alertVisible = derived(setVisibleAlert, ($setVisibleAlert) => $setVisibleAlert);

export const setAlertMessage = writable("Success!");
export const alertMessage = derived(setAlertMessage, ($setAlertMessage) => $setAlertMessage);