// Copyright (c) ZeroC, Inc.

import { Tag, Config, Node } from '@markdoc/markdoc';
import { SupportedEncodings } from 'components/SupportedEncoding';
import { Encoding } from 'types';

export default {
  render: SupportedEncodings,
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config);
    const frontmatter = config.variables?.markdoc.frontmatter;
    const supported = frontmatter.encoding
      ? [frontmatter.encoding]
      : [Encoding.Slice1, Encoding.Slice2];
    return new Tag(`${this.render}`, {
      ...attributes,
      supported
    });
  }
};
