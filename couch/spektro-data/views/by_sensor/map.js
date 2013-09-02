function(doc) {
  emit ([doc.phoneId, doc.androidType, doc.timestamp], doc);
}
