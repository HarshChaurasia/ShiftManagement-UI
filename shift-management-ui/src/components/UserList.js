

export const UserList = () => {

    var userList = [
        {
            name:'user1',
            scheduledHours:2,
            workingDaysPerWeek:5,
            jobClassification:'Front Desk',
            sickDayBalance:2
        },
        {
            name:'user2',
            scheduledHours:3,
            workingDaysPerWeek:5,
            jobClassification:'Back Desk',
            sickDayBalance:2
        },
        {
            name:'user3',
            scheduledHours:4,
            workingDaysPerWeek:5,
            jobClassification:'Left Desk',
            sickDayBalance:1
        }
    ]
    const userListDiv = [];
    for(let i=0;i<userList.length;i++){
        userListDiv.push(
            <div class='row'>
            <div class='col-4'>
                <input type='checkbox'></input>
            </div>
            <div class='col-8'> 
            
            {userList[i].name}
            Scheduled hours: {userList[i].scheduledHours}h
            Working days per week: {userList[i].workingDaysPerWeek}
            Job classification: {userList[i].jobClassification}
            Sick Day Balance : {userList[i].sickDayBalance} </div>
        </div>
        )
    }
    return (
        userListDiv    
    );
}