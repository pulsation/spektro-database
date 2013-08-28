function(doc) {
  if (typeof doc.phoneId !== "undefined") {
    emit (doc.phoneId, {model: doc.phoneModel});
  }
}
