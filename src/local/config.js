/**
 * Local fork switches for the desktop app. Flip to false to get upstream behaviour back.
 *
 * LOCAL_OFFLINE: no Sentry crash reports to Requestly, and no auto-update
 * (electron-updater would fetch Requestly's official build and replace this fork).
 */
export const LOCAL_OFFLINE = true;
