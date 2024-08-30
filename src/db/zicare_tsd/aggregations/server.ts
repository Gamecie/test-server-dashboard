export const serverRelationalAggregation = [
  {
    '$lookup': {
      'from': 'server_type', 
      'localField': 'type_id', 
      'foreignField': '_id', 
      'as': 'type'
    }
  }, {
    '$set': {
      'type': {
        '$arrayElemAt': [
          '$type.name', 0
        ]
      }
    }
  }, {
    '$lookup': {
      'from': 'server_status', 
      'localField': 'status_id', 
      'foreignField': '_id', 
      'as': 'status'
    }
  }, {
    '$set': {
      'status': {
        '$arrayElemAt': [
          '$status.name', 0
        ]
      }
    }
  }, {
    '$lookup': {
      'from': 'task', 
      'localField': 'task_id', 
      'foreignField': '_id', 
      'as': 'task'
    }
  }, {
    '$set': {
      'task': {
        '$arrayElemAt': [
          '$task', 0
        ]
      }
    }
  }, {
    '$project': {
      'task_id': 0,
    }
  }
  
];