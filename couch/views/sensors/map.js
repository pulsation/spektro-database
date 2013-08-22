function(doc) {
	if (doc.sensorType === "Proximity") {
    emit (doc._id, {values: doc.values, timestamp: doc.timestamp});
	}
}
