'use strict';

wtpApp.factory('situationData', function () {

    var situations = {
        baseData: {},
        functions: {}
    }

    //First Load
    if (!localStorage['situationData']) {
        setInitialSituationData(situations);
    }
    else {
        situations.baseData = JSON.parse(localStorage['situationData']);
    }

    situations.functions.saveData = function () {
        localStorage['situationData'] = JSON.stringify(situations.baseData);
    };
    situations.functions.resetData = function () {
        setInitialSituationData(situations);
    };

    return situations;

});

var setInitialSituationData = function (situations) {
    situations.baseData = {
        situations: [
            {
                SituationId: 1,
                SituationHeader: 'Initiation',
                SituationText: 'Are you ready to be a GOP candidate?',
                choices: [
                    {
                        ChoiceId: 1,
                        ResultSituationId: 2
                    },
                    {
                        ChoiceId: 2,
                        ResultSituationId: 2
                    },
                    {
                        ChoiceId: 3,
                        ResultSituationId: 2
                    },
                    {
                        ChoiceId: 4,
                        ResultSituationId: 2
                    }
                ]
            },
            {
                SituationId: 2,
                SituationHeader: 'Game Over',
                SituationText: 'Why did you play the game then?'
            }
        ],
        choices: [
            {
                ChoiceId: 1,
                ChoiceText: 'Yes'
            },
            {
                ChoiceId: 2,
                ChoiceText: 'No'
            },
            {
                ChoiceId: 3,
                ChoiceText: 'Maybe?'
            },
            {
                ChoiceId: 4,
                ChoiceText: 'Leave me alone!'
            },
            {
                ChoiceId: 5,
                ChoiceText: 'Game Over!'
            }
        ]
    }

};