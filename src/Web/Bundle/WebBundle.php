<?php

namespace Web\Bundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class WebBundle extends Bundle
{
    public function getParent()
    {
        return 'AntWebBundle';
    }
}
