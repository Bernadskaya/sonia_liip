<?php
/**
 * Created by PhpStorm.
 * User: nevada
 * Date: 16.01.14
 * Time: 10:41
 */

namespace Web\Bundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class FrontendBuilder extends ContainerAware {

    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav navbar-nav navbar-right')
            ->addChild('menu.frontend.index', array('uri' => '/'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.portfolio', array('uri' => '/portfolio'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.services', array('uri' => '/#services'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.about', array('uri' => '/#about'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.news', array('uri' => '/news'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.contacts', array('uri' => '/contacts'))
            ->setExtra('translation_domain', 'WebBundle');

        return $menu;
    }

    public function footerMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav nav-pills nav-justified')
            ->addChild('menu.frontend.index', array('route' => 'ad'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.news', array('route' => 'news'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.portfolio', array('route' => 'gallery'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.contacts', array('route' => 'contacts'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.order', array('route' => 'order_new'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.services', array('route' => 'order_new'))
            ->setExtra('translation_domain', 'WebBundle');


        return $menu;
    }

}
