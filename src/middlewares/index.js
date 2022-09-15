const logger = store => next => action => {
  console.log(action)
  next(action)
}

const featuring = store => next => actionInfo => {
  const pokeInfo = fetch(ac)
  const featured = [{ name: 'Fede' }, ...actionInfo.action.payload]
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured }
  }
  next(updatedActionInfo)
}

export { logger, featuring }
