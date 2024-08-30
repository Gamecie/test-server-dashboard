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
      'task_id': 0
    }
  }, {
    '$lookup': {
      'from': 'employee', 
      'localField': 'task.work_by', 
      'foreignField': '_id', 
      'as': 'task.work_by'
    }
  }, {
    '$set': {
      'task.work_by': {
        '$first': '$task.work_by'
      }
    }
  }, {
    '$lookup': {
      'from': 'employee', 
      'localField': 'task.test_by', 
      'foreignField': '_id', 
      'as': 'task.test_by'
    }
  }, {
    '$set': {
      'task.test_by': {
        '$first': '$task.test_by'
      }
    }
  }, {
    '$project': {
      'task.server_id': 0, 
      'task.status_id': 0
    }
  }, {
    '$set': {
      'task.created_date': {
        '$toDate': '$task.created_date'
      }
    }
  }
];