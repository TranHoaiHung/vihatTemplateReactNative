- Fix Your Ruby version is 3.0.0, but your gemfile specified 2.7.5
- Fix:setting by default is the previously installed rvm or rbenv. Use the command to set the default version RUBY for the machine
#  run: `rvm use 3.0.0`


# Steps to run source for the first time:
- Step 1: `yarn install`
- Step 2: `cd ios && bundle install && pod install && cd ..`
- Step 3: `yarn _ios` 

----------------------------------------------
- If you see this error when run 'pod install': `Unicode Normalization not appropriate for ASCII-8BIT` 
- YOU RUN: `LANG=en_US.UTF-8 pod install` 
