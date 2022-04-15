
const list = ["Old Man's War", "The Lock Artist"]



const options = {
    includeScore: true
  }
  
  const fuse = new Fuse(list, options)
  
  const result = fuse.search('od man')

  console.log(result)