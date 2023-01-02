var studentsData = [];

document.getElementById('add-student-button').addEventListener('click', function(event) {
    event.preventDefault();
    var studentName = document.getElementById('student-name').value;
    var className = document.getElementById('class-name').value;
    var testNumber = document.getElementById('test-number').value;
    var readingExam = parseInt(document.getElementById('reading-exam').value);
    var listeningExam = parseInt(document.getElementById('listening-exam').value);
    var writingPt1 = parseInt(document.getElementById('writing-pt1-exam').value);
    var writingPt2 = parseInt(document.getElementById('writing-pt2-exam').value);
    var speakingExam = parseInt(document.getElementById('speaking-exam').value);

    // calculate the final result
    var writingExam = writingPt1 + writingPt2
    var finalResult = readingExam + listeningExam + writingPt1 + writingPt2 + speakingExam;
    var finalPercentage = (finalResult / 117) * 100;

    // add to class data list  --------- to be fixed along with page 3
    var student = {
        class: className,
        test: testNumber,
        name: studentName,
        reading: readingExam,
        listening: listeningExam,
        writing: writingExam,
        speaking: speakingExam,
        total: finalResult,
        percentage: finalPercentage
      };
    studentsData.push(student);

    // display variables
    var readingResult = readingExam + '/32' ;
    var listeningResult = listeningExam + '/25';
    var writingResult = writingPt1 + writingPt2 + '/40';
    var speakingResult = speakingExam + '/20';
    var totalResult = finalResult + '/117';
    var readingPer = readingExam/32*100;
    var listeningPer = listeningExam/25*100;
    var writingPer = (writingPt1 + writingPt2)/40*100;
    var speakingPer = speakingExam/20*100

    // add the student to the students list
    var studentsList = document.getElementById('students-list');
    var newListItem = document.createElement('pre');
    var textNode = document.createTextNode(studentName + ':\n' + 
    '   R: ' + readingResult + '; ' + readingPer.toFixed(2) + '%\n' +
    '   L: ' + listeningResult + '; ' + listeningPer.toFixed(2) + '%\n' +
    '   W: ' + writingResult + '; ' + writingPer.toFixed(2) + '%\n' +
    '   S: ' + speakingResult + '; ' + speakingPer.toFixed(2) + '%\n' +
    '   T: ' + totalResult + '; ' + finalPercentage.toFixed(2) + '%\n\n');
    newListItem.appendChild(textNode);
    studentsList.appendChild(newListItem);

    // add the class to the classes list
    var classList = document.getElementById('class-list');
    var listItem = document.createElement('pre');
    var createTextNode = document.createTextNode(className);
    
    // Check if the class name already exists in the list
    var classExists = false;
    for (let i = 0; i < classList.childNodes.length; i++) {
        if (classList.childNodes[i].textContent === className) {
            classExists = true;
            break;}
    }
    // If the class name doesn't exist, add it to the list
    if (!classExists) {
        var listItem = document.createElement('li');
        var textNode = document.createTextNode(className);
        listItem.appendChild(textNode);
        classList.appendChild(listItem);
    }

});
