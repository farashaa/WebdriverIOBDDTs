class RandomData {
    generateEmail() {

        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';

        var string = '';

        for (var i = 0; i < 8; i++) {

            string += chars[Math.floor(Math.random() * chars.length)];

        }

        return string + "@test.com"

    }
}
export default new RandomData()