import React from 'react';
import LayoutComponent from '../components/LayoutComponent/LayoutComponent';
import { ITemplateProps } from '../interface';
import Utterances from './Utterances';
import '../css/post.css';

type IPostTemplateProps = ITemplateProps<{
  title: string;
  date: Date;
  html: string;
  toc: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
  const { title, date, html, toc } = props.pageContext;
  console.log(props.pageContext);
  console.log(toc);
  console.log('TEST_CEJ');
  return (
    <LayoutComponent>
      <div id="toc" dangerouslySetInnerHTML={{ __html: toc }} />
      <h2>{title}</h2>
      <h4>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Utterances repo="melonpan0130/melonpan0130.github.io" />
    </LayoutComponent>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
