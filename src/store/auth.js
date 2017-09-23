// Command for drop-in replacements
// cordova plugin add <plugin> --save --variable APP_ID="284976281987715" --variable APP_NAME="Snapchase"

const state = {
  signedIn: false,
  user: null
}

const actions = {
  signIn() {
    return new Promise((resolve, reject) => {
      // cordova plugin not loaded
      if (!facebookConnectPlugin) { reject('Something went wrong.'); }
      facebookConnectPlugin.login(['email'],
        (result) => {
          console.log('login success: ', result);
          resolve(result)
        },
        (result) => {
          console.log('login fail: ', result);
          reject('There was an error');
        }
      );
    });
  },
  signOut() {
    return new Promise((resolve, reject) => {
      // cordova plugin not loaded
      if (!facebookConnectPlugin) { reject('Something went wrong.'); }
      facebookConnectPlugin.logout(
        (result) => { resolve('Logged out'); },
        (result) => { reject('Something went wrong'); }
      );
    });
  }
}

const mutations = {
}

const getters = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
