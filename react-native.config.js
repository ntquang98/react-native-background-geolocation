module.exports = {
    dependency: {
        platforms: {
            android: {
                sourceDir: "./android/lib"
            }
        },
        hooks: {
            postlink: "node ./node_modules/@ntquang98/react-native-background-geolocation/scripts/postlink.js",
            postunlink: "node ./node_modules/@ntquang98/react-native-background-geolocation/scripts/postunlink.js"
        }
    }
};