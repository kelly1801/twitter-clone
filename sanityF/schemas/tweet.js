export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet ',
      description: 'ADMIN Controls: Toggle if Tweet is deemed innapropiate',
  type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
     
    },
    {
      name: 'image',
      title: 'tweet image',
      type: 'string',
     
    },
    
    

  ]
}
