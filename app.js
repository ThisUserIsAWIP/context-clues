$(function () {
    var friends = ['Bob', 'Sarah', 'Steve', 'Fred', 'Jimmy']
    var locations = ['bathroom', 'basement', 'kitchen', 'attic', 'hallway', 'closet', 'garage', 'pool', 'yard', 'garden']
    var weapons = ['pole', 'hammer', 'knife', 'cue', 'candlestick', 'rope', 'bat', 'baguette', 'flower', 'pencil', 'mower', 'hatchet', 'noodle', 'door', 'jar', 'mace', 'torch', 'pillow', 'scissors', 'bottle']

    for (i = 1; i < 101; i++) {
        $('body').append('<h3 class="accusation" id= "accusation'+ i +'" > Accusation ' + i + '</h3>')
        $('#accusation'+ i).click(myAlert(i))
    }
    function myAlert(i) {
        var friendName = friends[i % 5]
        var locationName = locations[i % 10]
        var weaponName = weapons[i % 20]
        function accusation() {
            alert('I accuse ' + friendName + ', with the ' + weaponName + ' in the ' + locationName)
        }
        return accusation;
    }



})