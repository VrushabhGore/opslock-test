interface IShift {
    start: string;
    end: string;
  }
  //Shifts at which the user is working for the day
 export const usershifts = <IShift[]>[
      {
          start: '0600',
          end: '1000'
      },
      {
          start: '1600',
          end: '2000'
      }
  ];
  
  // Shifts available for the day
 export const globalShiftList = <IShift[]>[
      {
          start: '0000',
          end: '2359'
      },
      {
          start: '0600',
          end: '1800'
      },
      {
          start: '0000',
          end: '1200'
      },
      {
          start: '0600',
          end: '1200'
      },
      {
          start: '1800',
          end: '2359'
      },
      {
          start: '0000',
          end: '0600'
      },
      {
          start: '1200',
          end: '2359'
      },
      {
          start: '1200',
          end: '1800'
      }

  ];

  //Function to check more available shifts for the day
 export const checkfunction: (usershift:IShift[],globalShiftList:IShift[]) => IShift[] = function(usershift:IShift[],globalShiftList:IShift[]):IShift[]{

    const returnShift: any = <IShift[]>[];
    let prevShift = <IShift[]>[];

    usershifts.forEach((usershift,index)=>{
        globalShiftList.forEach((shift) => {
            let startBeforeUsershift = Number(shift.start) < Number(usershift.start) && Number(shift.end <= usershift.start);

            let startAfterUserShift = Number(shift.start) >= Number(usershift.end) && Number(shift.end) > Number(shift.start);

            if( startBeforeUsershift || startAfterUserShift ){
                if(index === 0){
                    returnShift.push(shift);
                }
            }else{
                prevShift.forEach(availableshift => {
                    if(availableshift === shift){
                        returnShift.splice(returnShift.indexOf(shift),1)
                    }
                })
            }

            prevShift = returnShift;
        })
        
    })

    return (returnShift);
 }
