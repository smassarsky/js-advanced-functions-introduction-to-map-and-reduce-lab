function mapToNegativize(sourceArray) {
  let out = []
  for (let element of sourceArray) {
    out.push(element * -1)
  }
  return out
}

function mapToNoChange(sourceArray) {
  return [...sourceArray]
}

function mapToDouble(sourceArray) {
  let out = []
  for (let element of sourceArray) {
    out.push(element * 2)
  }
  return out
}

function mapToSquare(sourceArray) {
  let out = []
  for (let element of sourceArray) {
    out.push(element ** 2)
  }
  return out
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for (let element of sourceArray) {
    startingPoint += element
  }
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  for (let element of sourceArray) {
    if (!element) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let element of sourceArray) {
    if (!!element) {
      return true
    }
  }
  return false
}