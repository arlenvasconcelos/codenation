export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: '9dd188513e41427e87670818652bf0a5',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
