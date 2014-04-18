module.exports = {
    main: {
        files: [
            //js (remvove when uglify is ready)
            {
                expand: true,
                cwd: 'src/js/',
                src: '**/*',
                dest: 'builds/website/js/'
            },
            //fonts
            {
                expand: true,
                cwd: 'src/fonts/',
                src: '**/*',
                dest: 'builds/website/fonts/'
            },
            //libs
            {
                expand: true,
                cwd: 'src/lib/',
                src: '**/*',
                dest: 'builds/website/lib/'
            },
            //data
            {
                expand: true,
                cwd: 'src/data/',
                src: '*',
                dest: 'builds/website/data/'
            },
            //icons
            {
                expand: true,
                cwd: 'src/ico/',
                src: '*',
                dest: 'builds/website/ico/'
            },
            //icons
            {
                expand: true,
                cwd: 'src/icons/',
                src: '*',
                dest: 'builds/website/icons/'
            },
            //images
            {
                expand: true,
                cwd: 'src/img/',
                src: '*',
                dest: 'builds/website/img/'
            },
            //all files from root
            {
                expand: true,
                cwd: 'src/',
                src: '.*',
                dest: 'builds/website/'
            }
        ]
    }
};
