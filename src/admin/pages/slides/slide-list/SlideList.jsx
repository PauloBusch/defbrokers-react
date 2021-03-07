import './SlideList.css';

import React from 'react';

import Card from '../../../partials/card/Card';
import CardContent from '../../../partials/card/card-content/CardContent';
import CardHeader from '../../../partials/card/card-header/CardHeader';

export default props => (
  <div className="page-slide-list">
    <Card>
      <CardHeader>
        <h2>Slides</h2>
      </CardHeader>
      <CardContent>
        Lista
      </CardContent>
    </Card>
  </div>
);
