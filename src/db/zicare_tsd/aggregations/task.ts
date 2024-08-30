export const taskRelationalAggregation = [
  {
    '$lookup': {
      'from': 'employee', 
      'localField': 'work_by', 
      'foreignField': '_id', 
      'as': 'engineer'
    }
  }, {
    '$set': {
      'engineer': {
        '$arrayElemAt': [
          '$engineer.name', 0
        ]
      }
    }
  }, {
    '$lookup': {
      'from': 'employee', 
      'localField': 'test_by', 
      'foreignField': '_id', 
      'as': 'qa'
    }
  }, {
    '$set': {
      'qa': {
        '$arrayElemAt': [
          '$qa.name', 0
        ]
      }
    }
  }, {
    '$lookup': {
      'from': 'task_status', 
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
      'from': 'server', 
      'localField': 'server_id', 
      'foreignField': '_id', 
      'as': 'server'
    }
  }, {
    '$set': {
      'server': {
        '$arrayElemAt': [
          '$server.title', 0
        ]
      }
    }
  }, {
    '$project': {
      'test_by': 0, 
      'status_id': 0, 
      '_id': 0, 
      'server_id': 0, 
      'work_by': 0
    }
  }
];