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
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Firebase
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```typescript
 * import { Firebase } from '@ionic-native/firebase';
 *
 * constructor(private firebase: Firebase) { }
 *
 * ...
 *
 * this.firebase.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebase.onNotificationOpen()
 *    .subscribe(data => console.log(`User opened a notification ${data}`));
 *
 * this.firebase.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 *
 * ```
 */
var Firebase = (function (_super) {
    __extends(Firebase, _super);
    function Firebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device token
     * @return {Promise<null | string>} Note that token will be null if it has not been established yet
     */
    /**
       * Get the device token
       * @return {Promise<null | string>} Note that token will be null if it has not been established yet
       */
    Firebase.prototype.getToken = /**
       * Get the device token
       * @return {Promise<null | string>} Note that token will be null if it has not been established yet
       */
    function () {
        return;
    };
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    /**
       * Get notified when a token is refreshed
       * @return {Observable<any>}
       */
    Firebase.prototype.onTokenRefresh = /**
       * Get notified when a token is refreshed
       * @return {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    /**
       * Get notified when the user opens a notification
       * @return {Observable<any>}
       */
    Firebase.prototype.onNotificationOpen = /**
       * Get notified when the user opens a notification
       * @return {Observable<any>}
       */
    function () {
        return;
    };
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    /**
       * Grant permission to receive push notifications
       * @return {Promise<any>}
       */
    Firebase.prototype.grantPermission = /**
       * Grant permission to receive push notifications
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Check permission to receive push notifications
     * @return {Promise<{isEnabled: boolean}>}
     */
    /**
       * Check permission to receive push notifications
       * @return {Promise<{isEnabled: boolean}>}
       */
    Firebase.prototype.hasPermission = /**
       * Check permission to receive push notifications
       * @return {Promise<{isEnabled: boolean}>}
       */
    function () {
        return;
    };
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param {number} badgeNumber
     * @return {Promise<any>}
     */
    /**
       * Set icon badge number. Set to 0 to clear the badge.
       * @param {number} badgeNumber
       * @return {Promise<any>}
       */
    Firebase.prototype.setBadgeNumber = /**
       * Set icon badge number. Set to 0 to clear the badge.
       * @param {number} badgeNumber
       * @return {Promise<any>}
       */
    function (badgeNumber) {
        return;
    };
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    /**
       * Get icon badge number
       * @return {Promise<any>}
       */
    Firebase.prototype.getBadgeNumber = /**
       * Get icon badge number
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Subscribe to a topic
     * @param {string} topic
     * @return {Promise<any>}
     */
    /**
       * Subscribe to a topic
       * @param {string} topic
       * @return {Promise<any>}
       */
    Firebase.prototype.subscribe = /**
       * Subscribe to a topic
       * @param {string} topic
       * @return {Promise<any>}
       */
    function (topic) {
        return;
    };
    /**
     * Unsubscribe from a topic
     * @param {string} topic
     * @return {Promise<any>}
     */
    /**
       * Unsubscribe from a topic
       * @param {string} topic
       * @return {Promise<any>}
       */
    Firebase.prototype.unsubscribe = /**
       * Unsubscribe from a topic
       * @param {string} topic
       * @return {Promise<any>}
       */
    function (topic) {
        return;
    };
    /**
     * Unregister from firebase, used to stop receiving push notifications.
     * Call this when you logout user from your app.
     */
    /**
       * Unregister from firebase, used to stop receiving push notifications.
       * Call this when you logout user from your app.
       */
    Firebase.prototype.unregister = /**
       * Unregister from firebase, used to stop receiving push notifications.
       * Call this when you logout user from your app.
       */
    function () {
        return;
    };
    /**
     * Log an event using Analytics
     * @param {string} type
     * @param {Object} data
     * @return {Promise<any>}
     */
    /**
       * Log an event using Analytics
       * @param {string} type
       * @param {Object} data
       * @return {Promise<any>}
       */
    Firebase.prototype.logEvent = /**
       * Log an event using Analytics
       * @param {string} type
       * @param {Object} data
       * @return {Promise<any>}
       */
    function (type, data) {
        return;
    };
    /**
     * Log an Error using FirebaseCrash
     * @param {string} message
     * @return {Promise<any>}
     */
    /**
       * Log an Error using FirebaseCrash
       * @param {string} message
       * @return {Promise<any>}
       */
    Firebase.prototype.logError = /**
       * Log an Error using FirebaseCrash
       * @param {string} message
       * @return {Promise<any>}
       */
    function (message) {
        return;
    };
    /**
     * Set the name of the current screen in Analytics
     * @param {string} name Screen name
     * @return {Promise<any>}
     */
    /**
       * Set the name of the current screen in Analytics
       * @param {string} name Screen name
       * @return {Promise<any>}
       */
    Firebase.prototype.setScreenName = /**
       * Set the name of the current screen in Analytics
       * @param {string} name Screen name
       * @return {Promise<any>}
       */
    function (name) {
        return;
    };
    /**
     * Set a user id for use in Analytics
     * @param {string} userId
     * @return {Promise<any>}
     */
    /**
       * Set a user id for use in Analytics
       * @param {string} userId
       * @return {Promise<any>}
       */
    Firebase.prototype.setUserId = /**
       * Set a user id for use in Analytics
       * @param {string} userId
       * @return {Promise<any>}
       */
    function (userId) {
        return;
    };
    /**
     * Set a user property for use in Analytics
     * @param {string} name
     * @param {string} value
     * @return {Promise<any>}
     */
    /**
       * Set a user property for use in Analytics
       * @param {string} name
       * @param {string} value
       * @return {Promise<any>}
       */
    Firebase.prototype.setUserProperty = /**
       * Set a user property for use in Analytics
       * @param {string} name
       * @param {string} value
       * @return {Promise<any>}
       */
    function (name, value) {
        return;
    };
    /**
     * Fetch Remote Config parameter values for your app
     * @param {number} [cacheExpirationSeconds]
     * @return {Promise<any>}
     */
    /**
       * Fetch Remote Config parameter values for your app
       * @param {number} [cacheExpirationSeconds]
       * @return {Promise<any>}
       */
    Firebase.prototype.fetch = /**
       * Fetch Remote Config parameter values for your app
       * @param {number} [cacheExpirationSeconds]
       * @return {Promise<any>}
       */
    function (cacheExpirationSeconds) {
        return;
    };
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    /**
       * Activate the Remote Config fetched config
       * @return {Promise<any>}
       */
    Firebase.prototype.activateFetched = /**
       * Activate the Remote Config fetched config
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Retrieve a Remote Config value
     * @param {string} key
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    /**
       * Retrieve a Remote Config value
       * @param {string} key
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    Firebase.prototype.getValue = /**
       * Retrieve a Remote Config value
       * @param {string} key
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    function (key, namespace) {
        return;
    };
    /**
     * Retrieve a Remote Config byte array
     * @param {string} key
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    /**
       * Retrieve a Remote Config byte array
       * @param {string} key
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    Firebase.prototype.getByteArray = /**
       * Retrieve a Remote Config byte array
       * @param {string} key
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    function (key, namespace) {
        return;
    };
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    /**
       * Get the current state of the FirebaseRemoteConfig singleton object
       * @return {Promise<any>}
       */
    Firebase.prototype.getInfo = /**
       * Get the current state of the FirebaseRemoteConfig singleton object
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param {Object} settings
     * @return {Promise<any>}
     */
    /**
       * Change the settings for the FirebaseRemoteConfig object's operations
       * @param {Object} settings
       * @return {Promise<any>}
       */
    Firebase.prototype.setConfigSettings = /**
       * Change the settings for the FirebaseRemoteConfig object's operations
       * @param {Object} settings
       * @return {Promise<any>}
       */
    function (settings) {
        return;
    };
    /**
     * Set defaults in the Remote Config
     * @param {Object} defaults
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    /**
       * Set defaults in the Remote Config
       * @param {Object} defaults
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    Firebase.prototype.setDefaults = /**
       * Set defaults in the Remote Config
       * @param {Object} defaults
       * @param {string} [namespace]
       * @return {Promise<any>}
       */
    function (defaults, namespace) {
        return;
    };
    /**
     * Start a trace.
     * @param {string} trace Trace name
     */
    /**
       * Start a trace.
       * @param {string} trace Trace name
       */
    Firebase.prototype.startTrace = /**
       * Start a trace.
       * @param {string} trace Trace name
       */
    function (trace) {
        return;
    };
    /**
     * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
     * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
     * counting a different type of event:
     * @param {string} trace Trace name
     * @param {string} counter Counter
     */
    /**
       * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
       * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
       * counting a different type of event:
       * @param {string} trace Trace name
       * @param {string} counter Counter
       */
    Firebase.prototype.incrementCounter = /**
       * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
       * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
       * counting a different type of event:
       * @param {string} trace Trace name
       * @param {string} counter Counter
       */
    function (trace, counter) {
        return;
    };
    /**
     * Stop the trace
     * @param {string} trace Trace name
     */
    /**
       * Stop the trace
       * @param {string} trace Trace name
       */
    Firebase.prototype.stopTrace = /**
       * Stop the trace
       * @param {string} trace Trace name
       */
    function (trace) { };
    /**
     * Allows the user to enable/disable analytics collection
     * @param {boolean} enabled value to set collection
     * @returns {Promise<any>}
     */
    /**
       * Allows the user to enable/disable analytics collection
       * @param {boolean} enabled value to set collection
       * @returns {Promise<any>}
       */
    Firebase.prototype.setAnalyticsCollectionEnabled = /**
       * Allows the user to enable/disable analytics collection
       * @param {boolean} enabled value to set collection
       * @returns {Promise<any>}
       */
    function (enabled) {
        return;
    };
    /**
     * Allows the user to set User Identifier for crashlytics reporting
     * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
     * @param {string} userId value to set the userId
     * @returns {Promise<any>}
     */
    /**
       * Allows the user to set User Identifier for crashlytics reporting
       * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
       * @param {string} userId value to set the userId
       * @returns {Promise<any>}
       */
    Firebase.prototype.setCrashlyticsUserId = /**
       * Allows the user to set User Identifier for crashlytics reporting
       * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
       * @param {string} userId value to set the userId
       * @returns {Promise<any>}
       */
    function (userId) {
        return;
    };
    /**
     * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
     * @param {string} phoneNumber The phone number, including '+' and country code
     * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
     * @returns {Promise<any>}
     */
    /**
       * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
       * @param {string} phoneNumber The phone number, including '+' and country code
       * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
       * @returns {Promise<any>}
       */
    Firebase.prototype.verifyPhoneNumber = /**
       * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
       * @param {string} phoneNumber The phone number, including '+' and country code
       * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
       * @returns {Promise<any>}
       */
    function (phoneNumber, timeoutDuration) {
        if (timeoutDuration === void 0) { timeoutDuration = 0; }
        return;
    };
    /**
     * Clear all pending notifications from the drawer
     * @return {Promise<any>}
     */
    /**
       * Clear all pending notifications from the drawer
       * @return {Promise<any>}
       */
    Firebase.prototype.clearAllNotifications = /**
       * Clear all pending notifications from the drawer
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    Firebase.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "getToken", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Firebase.prototype, "onTokenRefresh", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Firebase.prototype, "onNotificationOpen", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "grantPermission", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "hasPermission", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setBadgeNumber", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "getBadgeNumber", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "subscribe", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "unsubscribe", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "unregister", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "logEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "logError", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setScreenName", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setUserId", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setUserProperty", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "fetch", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "activateFetched", null);
    __decorate([
        Cordova({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "getValue", null);
    __decorate([
        Cordova({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "getByteArray", null);
    __decorate([
        Cordova({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "getInfo", null);
    __decorate([
        Cordova({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setConfigSettings", null);
    __decorate([
        Cordova({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setDefaults", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "startTrace", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "incrementCounter", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Firebase.prototype, "stopTrace", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setAnalyticsCollectionEnabled", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "setCrashlyticsUserId", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS'],
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "verifyPhoneNumber", null);
    __decorate([
        Cordova({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Firebase.prototype, "clearAllNotifications", null);
    /**
     * @name Firebase
     * @description
     * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
     *
     * @usage
     * ```typescript
     * import { Firebase } from '@ionic-native/firebase';
     *
     * constructor(private firebase: Firebase) { }
     *
     * ...
     *
     * this.firebase.getToken()
     *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
     *   .catch(error => console.error('Error getting token', error));
     *
     * this.firebase.onNotificationOpen()
     *    .subscribe(data => console.log(`User opened a notification ${data}`));
     *
     * this.firebase.onTokenRefresh()
     *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
     *
     * ```
     */
    Firebase = __decorate([
        Plugin({
            pluginName: 'Firebase',
            plugin: 'cordova-plugin-firebase',
            pluginRef: 'FirebasePlugin',
            repo: 'https://github.com/arnesson/cordova-plugin-firebase',
            platforms: ['Android', 'iOS']
        })
    ], Firebase);
    return Firebase;
}(IonicNativePlugin));
export { Firebase };
//# sourceMappingURL=index.js.map