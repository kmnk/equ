# SEEALSO: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

TYPE =
  # Programs
  PROGRAM: 'Program'

  # Statements
  EMPTY_STATEMENT:      'EmptyStatement'
  BLOCK_STATEMENT:      'BlockStatement'
  EXPRESSION_STATEMENT: 'ExpressionStatement'
  IF_STATEMENT:         'IfStatement'
  LABELED_STATEMENT:    'LabeledStatement'
  BREAK_STATEMENT:      'BreakStatement'
  CONTINUE_STATEMENT:   'ContinueStatement'
  WITH_STATEMENT:       'WithStatement'
  SWITCH_STATEMENT:     'SwitchStatement'
  RETURN_STATEMENT:     'ReturnStatement'
  THROW_STATEMENT:      'ThrowStatement'
  TRY_STATEMENT:        'TryStatement'
  WHILE_STATEMENT:      'WhileStatement'
  DO_WHILE_STATEMENT:   'DoWhileStatement'
  FOR_STATEMENT:        'ForStatement'
  FOR_IN_STATEMENT:     'ForInStatement'
  FOR_OF_STATEMENT:     'ForOfStatement'
  LET_STATEMENT:        'LetStatement'
  DEBUGGER_STATEMENT:   'DebuggerStatement'

  # Declarations
  FUNCTION_DECLARATION: 'FunctionDeclaration'
  VARIABLE_DECLARATION: 'VariableDeclaration'
  VARIABLE_DECLARATOR:  'VariableDeclarator'

  # Expressions
  THIS_EXPRESSION:          'ThisExpression'
  ARRAY_EXPRESSION:         'ArrayExpression'
  OBJECT_EXPRESSION:        'ObjectExpression'
  FUNCTION_EXPRESSION:      'FunctionExpression'
  ARROW_EXPRESSION:         'ArrowExpression'
  SEQUENCE_EXPRESSION:      'SequenceExpression'
  UNARY_EXPRESSION:         'UnaryExpression'
  BINARY_EXPRESSION:        'BinaryExpression'
  ASSIGNMENT_EXPRESSION:    'AssignmentExpression'
  UPDATE_EXPRESSION:        'UpdateExpression'
  LOGICAL_EXPRESSION:       'LogicalExpression'
  CONDITIONAL_EXPRESSION:   'ConditionalExpression'
  NEW_EXPRESSION:           'NewExpression'
  CALL_EXPRESSION:          'CallExpression'
  MEMBER_EXPRESSION:        'MemberExpression'
  LET_EXPRESSION:           'LetExpression'

  # Patterns
  OBJECT_PATTERN: 'ObjectPattern'
  ARRAY_PATTERN:  'ArrayPattern'

  # Clauses
  SWITCH_CASE:  'SwitchCase'
  CATCH_CLAUSE: 'CatchClause'

  # Miscellaneous
  IDENTIFIER: 'Identifier'
  LITERAL:    'Literal'

  # E4X
  XML_DEFAULT_DECLARATION:           'XMLDefaultDeclaration'
  XML_ANY_NAME:                      'XMLAnyName'
  XML_QUALIFIED_IDENTIFIER:          'XMLQualifiedIdentifier'
  XML_FUNCTION_QUALIFIED_IDENTIFIER: 'XMLFunctionQualifiedIdentifier'
  XML_ATTRIBUTE_SELECTOR:            'XMLAttributeSelector'
  XML_FILTER_EXPRESSION:             'XMLFilterExpression'
  XML_ELEMENT:                       'XMLElement'
  XML_LIST:                          'XMLList'

  # XML
  XML_ESCAPE:                  'XMLEscape'
  XML_TEXT:                    'XMLText'
  XML_START_TAG:               'XMLStartTag'
  XML_END_TAG:                 'XMLEndTag'
  XML_POINT_TAG:               'XMLPointTag'
  XML_NAME:                    'XMLName'
  XML_ATTRIBUTE:               'XMLAttribute'
  XML_CDATA:                   'XMLCdata'
  XML_COMMENT:                 'XMLComment'
  XML_PROCESSING_INSTRUCTION : 'XMLProcessingInstruction'

  # Others
  BOOLEAN:            'Boolean'
  KEYWORD:            'Keyword'
  NULL:               'Null'
  NUMERIC:            'Numeric'
  PROPERTY:           'Property'
  PUNCTUATOR:         'Punctuator'
  REGULAR_EXPRESSION: 'RegularExpression'
  STRING:             'String'

module.exports = TYPE: TYPE
