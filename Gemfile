source 'https://rubygems.org'

# Specify a compatible Ruby version (you can update this as needed)
ruby ">= 2.7.0"

# Cocoapods versions 1.15.0 and 1.15.1 had known issues with dependency resolution and `xcodeproj`
# Lock to latest stable and safe version
gem 'cocoapods', '~> 1.15.2'

# ActiveSupport compatibility — 7.1.0 is problematic in some cases
gem 'activesupport', '>= 6.1.7.5', '< 7.1.0'

# xcodeproj 1.26.0+ changed behavior that broke some RN projects
gem 'xcodeproj', '< 1.26.0'

# concurrent-ruby sometimes breaks with newer versions in CocoaPods
gem 'concurrent-ruby', '< 1.3.4'
