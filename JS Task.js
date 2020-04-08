       let data = [
          {principal: 2500, time:1.8}, 
          {principal: 1000, time:5}, 
          {Principal: 3000, time:1},
          {principal: 2000, time:3}
          
       ];

       function interestCalculator(array){
           let rate = 0;
           let interest = 0;
           let interestData = [];

           for(var i=0; i < array.length; i++){ 
                if (array[i].principal >= 2500 && (array[i].time > 1 && array[i].time < 3)){
                    rate = 3;
                }else if (array[i].principal >=2500 && array[i].time >=3){
                    rate = 4;
                }else if (array[i].principal < 2500 || array[i].time <=1){
                    rate = 2;
                }else rate = 1;
                
                interest = (array[i].principal * array[i].time * rate) / 100;
               
                let data = {principal: array[i].principal, time: array[i].time, 
                           rate: rate, interest: interest};

                interestData.push(data);

           }

        console.log(interestData);
        return interestData;

       }
