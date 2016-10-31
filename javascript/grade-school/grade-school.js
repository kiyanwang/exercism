function School() {

  var roster = {};

  /**
   * Returns the current roster
   */
  function getRoster(){
    return roster;
  }

  /**
   * adds a student to the roster for the given grade
   */
  function addStudentToRoster(name, grade){
    if(roster.hasOwnProperty(grade)){
      roster[grade].push(name);
      roster[grade] = roster[grade].sort();
    } else {
      roster[grade] = [name];
    }
  }

  /**
   * return all the students in a given grade
   * each grade is already in alphabetical order
   */
  function getGrade(grade){
    if(roster.hasOwnProperty(grade)){
      return roster[grade];
    } else {
      return [];
    }
  }

  return {
    add: addStudentToRoster,
    roster: getRoster,
    grade: getGrade
  }

};

module.exports = School;
