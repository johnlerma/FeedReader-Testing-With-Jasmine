/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through allFeeds, expects feed.url has been defined and its not empty
         */
        it('has a valid URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Tloops through allFeeds, expects feed.name has been defined and its not empty
         */

        it('has a valid Name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* epects that the body elemet does indeed have a class of 'menu-hidden'
         */
        it('menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* clicks menu-icon-link and expects the class 'menu-hidden' to be removed from the body element
         */
        it('menu appears when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('menu disappears when clicked again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* waits for the loadFeed to be done, then expects there to be at least 1 entry in the varialbe all Entries which is in the  element .feed and in the article element entry
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('shows at least 1 entry', function() {
            var allEntries = ($('.feed .entry'));
            expect(allEntries.length).toBeGreaterThan(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        /* waits for the feed to load then puts the feed text into a variable, then loads a new feed, put that in a new variable and then expects the two variables not to be equal, which means the feed has been changed/updated.
         */

        var oldFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').children().text();
                loadFeed(1, done);
            });
        });

        it('the content changed', function(done) {
            newFeed = $('.feed').children().text();
            expect(oldFeed).not.toEqual(newFeed);
            done();
        });
    });

}());