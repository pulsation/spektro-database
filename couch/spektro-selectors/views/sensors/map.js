function(doc) {
  if (typeof doc.androidType !== "undefined") {
    emit (doc.androidType, {name: doc.sensorName, type: doc.sensorType});
  }
}
