        const landingPageAddData = await addToLandingPage(resourceData)
        landingPageAddData.data === false ? console.log('landing page data added') : console.log('submitting request')
const createResource = async (resourceName, resourceData) => {
  switch (resourceName) {
    case landingPage:
      try{

      } catch(err){
        console.log('there was an error in the crud resource manager')
      }
      case events:
      try{

      } catch(err){
        console.log('there was an error in the crud resource manager')
      }
      case services:
      try{

      } catch(err){
        console.log('there was an error in the crud resource manager')
      }
      case sponsors:
      try{

      } catch(err){
        console.log('there was an error in the crud resource manager')
      }
      case contacts:
      try{

      } catch(err){
        console.log('there was an error in the crud resource manager')
      }
      
      
      break;
  
    default: null
      break;
  }
}

const readResource = (resourceName, resourceData) => {

}

const updateResource = (resourceName, resourceData) => {

}

const deleteResource = (resourceName, resourceData) => {

}