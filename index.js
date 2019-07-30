var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Firebase X
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.
 * It is a maintained fork from unmaintained ionic-navite plugin called Firebase.
 *
 * @usage
 * ```typescript
 * import { FirebaseX } from '@ionic-native/firebase-x';
 *
 *
 * constructor(private firebaseX: FirebaseX) { }
 *
 * ...
 *
 *
 * this.firebaseX.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebaseX.onMessageReceived()
 *   .subscribe(data => console.log(`User opened a notification ${data}`));
 *
 * this.firebaseX.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 * ```
 * @interfaces
 * IChannelOptions
 *
 */
var FirebaseX = (function (_super) {
    __extends(FirebaseX, _super);
    function FirebaseX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device token.
     * @return {Promise<null | string>} Note that token will be null if it has not been established yet
     */
    FirebaseX.prototype.getToken = function () {
        return;
    };
    /**
     * Get notified when a token is refreshed.
     * @return {Observable<any>}
     */
    FirebaseX.prototype.onTokenRefresh = function () {
        return;
    };
    /**
     * Registers a callback function to invoke when:
     * - a notification or data message is received by the app
     * - a system notification is tapped by the user
     * @return {Observable<any>}
     */
    FirebaseX.prototype.onMessageReceived = function () {
        return;
    };
    /**
     * Grant permission to receive push notifications (will trigger prompt) and return hasPermission: true. iOS only (Android will always return true).
     * @return {Promise<any>}
     */
    FirebaseX.prototype.grantPermission = function () {
        return;
    };
    /**
     * Check permission to receive push notifications and return hasPermission: true. iOS only (Android will always return true).
     * @return {Promise<{isEnabled: boolean}>}
     */
    FirebaseX.prototype.hasPermission = function () {
        return;
    };
    /**
     * Unregister from firebase, used to stop receiving push notifications. Call this when you logout user from your app.
     */
    FirebaseX.prototype.unregister = function () {
        return;
    };
    /**
     * Set a number on the icon badge. Set 0 to clear the badge
     * @param {number} badgeNumber
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setBadgeNumber = function (badgeNumber) {
        return;
    };
    /**
     * Get icon badge number.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.getBadgeNumber = function () {
        return;
    };
    /**
     * Clear all pending notifications from the drawer.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.clearAllNotifications = function () {
        return;
    };
    /**
     * Subscribe to a topic. Topic messaging allows you to send a message to multiple devices that have opted in to a particular topic.
     * @param {string} topic
     * @return {Promise<any>}
     */
    FirebaseX.prototype.subscribe = function (topic) {
        return;
    };
    /**
     * Unsubscribe from a topic. This will stop you receiving messages for that topic.
     * @param {string} topic
     * @return {Promise<any>}
     */
    FirebaseX.prototype.unsubscribe = function (topic) {
        return;
    };
    /**
     * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set in the message payload to the id of the created channel:
     * - for background (system) notifications: android.notification.channel_id
     * - for foreground/data notifications: data.notification_android_channel_id
     *
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {IChannelOptions} channelOptions
     * @return {Promise<any>}
     */
    FirebaseX.prototype.createChannel = function (channelOptions) {
        return;
    };
    /**
     * Android 8+ only. Overrides the properties for the default channel.
     * The default channel is used if no other channel exists or is specified in the notification.
     * Any options not specified will not be overridden. Should be called as soon as possible (on app start) so default notifications will work as expected.
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {IChannelOptions} channelOptions
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setDefaultChannel = function (channelOptions) {
        return;
    };
    /**
     * Android 8+ only. Removes a previously defined channel.
     * Calling on Android 7 or below or another platform will have no effect.
     * @param {string} channelID
     * @return {Promise<any>}
     */
    FirebaseX.prototype.deleteChannel = function (channelID) {
        return;
    };
    /**
     * Android 8+ only. Gets a list of all channels.
     * Calling on Android 7 or below or another platform will have no effect.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.listChannels = function () {
        return;
    };
    /**
     * Enable/disable analytics collection (useful for GDPR/privacy settings).
     * @param {boolean} enabled
     * @returns {Promise<any>}
     */
    FirebaseX.prototype.setAnalyticsCollectionEnabled = function (enabled) {
        return;
    };
    /**
     * Log an event using Analytics
     * @param {string} type
     * @param {Object} data
     * @return {Promise<any>}
     */
    FirebaseX.prototype.logEvent = function (type, data) {
        return;
    };
    /**
     * Set the name of the current screen in Analytics
     * @param {string} name Screen name
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setScreenName = function (name) {
        return;
    };
    /**
     * Set a user id for use in Analytics
     * @param {string} userId
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setUserId = function (userId) {
        return;
    };
    /**
     * Set a user property for use in Analytics
     * @param {string} name
     * @param {string} value
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setUserProperty = function (name, value) {
        return;
    };
    /**
     * Set Crashlytics user identifier.
     * To diagnose an issue, it’s often helpful to know which of your users experienced a given crash.
     * Crashlytics includes a way to anonymously identify users in your crash reports.
     * To add user IDs to your reports, assign each user a unique identifier in the form of an ID number, token, or hashed value.
     *
     * More info https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
     * @param {string} userId
     * @returns {Promise<any>}
     */
    FirebaseX.prototype.setCrashlyticsUserId = function (userId) {
        return;
    };
    /**
     * Simulates (causes) a fatal native crash which causes a crash event to be sent to Crashlytics (useful for testing).
     * See the Firebase documentation regarding crash testing.
     * Crashes will appear under Event type = "Crashes" in the Crashlytics console.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.sendCrash = function () {
        return;
    };
    /**
     * Sends a crash-related log message that will appear in the Logs section of the next native crash event.
     * Note: if you don't then crash, the message won't be sent! Also logs the message to the native device console.
     * @param {string} message
     * @return {Promise<any>}
     */
    FirebaseX.prototype.logMessage = function (message) {
        return;
    };
    /**
     * Sends a non-fatal error event to Crashlytics. In a Cordova app, you may use this to log unhandled Javascript exceptions, for example.
     * The event will appear under Event type = "Non-fatals" in the Crashlytics console.
     * The error message will appear in the Logs section of the non-fatal error event.
     * Also logs the error message to the native device console.
     * @param {string} error
     * @return {Promise<any>}
     */
    FirebaseX.prototype.logError = function (error) {
        return;
    };
    /**
     * Request a verification ID and send a SMS with a verification code. Use them to construct a credential to sign in the user (in your app).
     *
     * More info:
     * https://github.com/dpa99c/cordova-plugin-firebasex#verifyphonenumber
     * https://firebase.google.com/docs/auth/android/phone-auth
     * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCredential
     * https://firebase.google.com/docs/reference/js/firebase.User#linkWithCredential
     *
     * NOTE: This will only work on physical devices.
     *
     * iOS will return: credential (string)
     *
     * Android will return:
     * credential.verificationId (object and with key verificationId)
     * credential.instantVerification (boolean) credential.code (string)
     * (note that this key only exists if instantVerification is true)
     *
     * You need to use device plugin in order to access the right key.
     * IMPORTANT NOTE: Android supports auto-verify and instant device verification.
     * Therefore in that case it doesn't make sense to ask for an sms code as you won't receive one.
     * In this case you'll get a credential.verificationId and a credential.code where code is the auto received verification code
     * that would normally be sent via sms. To log in using this procedure you must pass this code to
     * PhoneAuthProvider.credential(verificationId, code). You'll find an implementation example further below.
     *
     * When using node.js Firebase Admin-SDK, follow this tutorial:
     * https://firebase.google.com/docs/auth/admin/create-custom-tokens
     *
     * Pass back your custom generated token and call
     * firebase.auth().signInWithCustomToken(customTokenFromYourServer);
     * instead of
     * firebase.auth().signInWithCredential(credential)
     *
     * YOU HAVE TO COVER THIS PROCESS, OR YOU WILL HAVE ABOUT 5% OF USERS STICKING ON YOUR SCREEN, NOT RECEIVING ANYTHING
     * If this process is too complex for you, use this awesome plugin
     * https://github.com/chemerisuk/cordova-plugin-firebase-authentication
     * It's not perfect but it fits for the most use cases and doesn't require calling your endpoint, as it has native phone auth support.
     *
     * Android
     * To use this auth you need to configure your app SHA hash in the android app configuration in the firebase console.
     * See https://developers.google.com/android/guides/client-auth to know how to get SHA app hash.
     *
     * iOS
     * Setup your push notifications first, and verify that they are arriving on your physical device before you test this method.
     * Use the APNs auth key to generate the .p8 file and upload it to firebase. When you call this method,
     * FCM sends a silent push to the device to verify it.
     *
     * @param {string} phoneNumber The phone number, including '+' and country code
     * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
     * @returns {Promise<any>}
     */
    FirebaseX.prototype.verifyPhoneNumber = function (phoneNumber, timeoutDuration) {
        if (timeoutDuration === void 0) { timeoutDuration = 0; }
        return;
    };
    /**
     * Fetch Remote Config parameter values for your app.
     * @param {number} cacheExpirationSeconds specify the cacheExpirationSeconds
     * @return {Promise<any>}
     */
    FirebaseX.prototype.fetch = function (cacheExpirationSeconds) {
        return;
    };
    /**
     * Activate the Remote Config fetched config.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.activateFetched = function () {
        return;
    };
    /**
     * Retrieve a Remote Config value.
     * @param {string} key
     * @return {Promise<any>}
     */
    FirebaseX.prototype.getValue = function (key) {
        return;
    };
    /**
     * Android only. Retrieve a Remote Config byte array.
     * @param {string} key
     * @return {Promise<any>}
     */
    FirebaseX.prototype.getByteArray = function (key) {
        return;
    };
    /**
     * Android only. Get the current state of the FirebaseRemoteConfig singleton object.
     * @return {Promise<any>}
     */
    FirebaseX.prototype.getInfo = function () {
        return;
    };
    /**
     * Android only. Change the settings for the FirebaseRemoteConfig object's operations.
     * @param {Object} settings
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setConfigSettings = function (settings) {
        return;
    };
    /**
     * Android only. Set defaults in the Remote Config.
     * @param {Object} settings
     * @return {Promise<any>}
     */
    FirebaseX.prototype.setDefaults = function (settings) {
        return;
    };
    /**
     * Start a trace.
     * @param {string} name
     * @return {Promise<any>}
     */
    FirebaseX.prototype.startTrace = function (name) {
        return;
    };
    /**
     * To count the performance-related events that occur in your app (such as cache hits or retries),
     * add a line of code similar to the following whenever the event occurs,
     * using a string other than retry to name that event if you are counting a different type of event.
     * @param {string} name
     * @return {Promise<any>}
     */
    FirebaseX.prototype.incrementCounter = function (name) {
        return;
    };
    /**
     * Stop the trace.
     * @param {string} name
     * @return {Promise<any>}
     */
    FirebaseX.prototype.stopTrace = function (name) {
        return;
    };
    return FirebaseX;
}(IonicNativePlugin));
FirebaseX.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FirebaseX.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "getToken", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], FirebaseX.prototype, "onTokenRefresh", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], FirebaseX.prototype, "onMessageReceived", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "grantPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "hasPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "unregister", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setBadgeNumber", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "getBadgeNumber", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "clearAllNotifications", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "subscribe", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "unsubscribe", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "createChannel", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setDefaultChannel", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "deleteChannel", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "listChannels", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setAnalyticsCollectionEnabled", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "logEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setScreenName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setUserProperty", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setCrashlyticsUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "sendCrash", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "logMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "logError", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "verifyPhoneNumber", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "fetch", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "activateFetched", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "getValue", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "getByteArray", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "getInfo", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setConfigSettings", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "setDefaults", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "startTrace", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "incrementCounter", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseX.prototype, "stopTrace", null);
FirebaseX = __decorate([
    Plugin({
        pluginName: 'FirebaseX',
        plugin: 'cordova-plugin-firebasex',
        pluginRef: 'FirebasePlugin',
        repo: 'https://github.com/dpa99c/cordova-plugin-firebasex',
        platforms: ['Android', 'iOS']
    })
], FirebaseX);
export { FirebaseX };
//# sourceMappingURL=index.js.map