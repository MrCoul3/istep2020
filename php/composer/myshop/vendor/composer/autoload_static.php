<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb227348ec558e0fd41e944683892b96d
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'Base\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Base\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Base',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb227348ec558e0fd41e944683892b96d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb227348ec558e0fd41e944683892b96d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
